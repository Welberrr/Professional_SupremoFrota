#!/usr/bin/env python3
# coding: utf-8
import os
import re
import sys
import semver
import argparse
import subprocess
import fileinput
import shutil
import xml.etree.ElementTree as ET

from os import environ

def git(*args):
  cmd=' '.join(['git',*args])
  print('Trying: '+cmd)
  try:
    subprocess.check_output(cmd,shell=True,stderr=subprocess.STDOUT)
  except subprocess.CalledProcessError as e:
    raise RuntimeError("command '{}' return with error (code {}): {}".format(e.cmd, e.returncode, e.output))

def bump(latest):
  # Calcula próxima tag a partir da última gerada (incremento apenas na última parte):
  return semver.bump_patch(latest)


def release_pre(args):
  version = get_version()

  url = environ["CI_REPOSITORY_URL"]

  # Transforma a URL HTTPS do repositorio em uma URL SSH
  # Exemplo (entrada): https://gitlab-ci-token:xxxxxxx@gitlab.com/stfcorporativo/projeto.git
  # Exemplo (saida): git@gitlab.com:stfcorporativo/projeto.git
  push_url = re.sub(r'.+@([^/]+)/', r'git@\1:', url)


  print(version)



def release_post(args):
  version = bump(get_version())

  url = environ["CI_REPOSITORY_URL"]

  # Transforma a URL HTTPS do repositorio em uma URL SSH
  # Exemplo (entrada): https://gitlab-ci-token:xxxxxxx@gitlab.com/stfcorporativo/projeto.git
  # Exemplo (saida): git@gitlab.com:stfcorporativo/projeto.git
  push_url = re.sub(r'.+@([^/]+)/', r'git@\1:', url)

  # Commit na branch desenvolvimento sem iniciar o pipeline
  git("remote", "set-url", "--push", "origin", push_url)
  git("config", "--global", "user.email", '"juarez.paulino@gmail.com"')
  git("config", "--global", "user.name", '"Juarez Paulino"')
  git("fetch")
  git("checkout", "desenvolvimento")
  git("pull", "-X", "theirs")

  version_dev = get_version()

  print(version)


def get_version():
  version = 'undefined'

  # A versão pode ser forçada via variável $VERSION passada ao pipeline.
  if "VERSION" in environ:
    return environ["VERSION"]
  # Versão do artefato é retornada com SNAPSHOT para branch não master.
  if "CI_COMMIT_REF_NAME" in environ:
    branch = environ["CI_COMMIT_REF_NAME"]
    if branch != "master":
      return version  
  # Caso branch master retira-se o SNAPSHOT da versão.
  return version

def version(args):
  print(get_version())  


def version_docker(args):
  # A versão pode ser forçada via variável $VERSION passada ao pipeline.
  if "VERSION" in environ:
    return environ["VERSION"]
  # Versão será sempre o nome da branch, caso o pipeline não seja acionado da master.
  if "CI_COMMIT_REF_NAME" in environ:
    branch = environ["CI_COMMIT_REF_NAME"]
    if branch != "master":
      print(branch)
      return  
  # Caso branch master a imagem docker leva o numero da versão do artefato.
  print(get_version())

def tag(args):
  ver = get_version()
  url = environ["CI_REPOSITORY_URL"]
  # Transforma a URL HTTPS do repositorio em uma URL SSH
  # Exemplo (entrada): https://gitlab-ci-token:xxxxxxx@gitlab.com/stfcorporativo/projeto.git
  # Exemplo (saida): git@gitlab.com:stfcorporativo/projeto.git
  push_url = re.sub(r'.+@([^/]+)/', r'git@\1:', url)
  print(push_url)

  git("remote", "set-url", "--push", "origin", push_url)
  git("tag", ver)
  git("push", "origin", ver)

  
def main():
  
  parser = argparse.ArgumentParser()
  subparsers = parser.add_subparsers()

  version_parser = subparsers.add_parser("version", help="Recupera a versão para o commit no Gitlab CI")
  version_parser.set_defaults(func=version)

  version_docker_parser = subparsers.add_parser("version_docker", help="Recupera a versão da imagem Docker para o commit no Gitlab CI")
  version_docker_parser.set_defaults(func=version_docker)

  tag_parser = subparsers.add_parser("tag", help="Gera tag e realiza commit no Gitlab CI")
  tag_parser.set_defaults(func=tag)

  if len(sys.argv) == 1:
    parser.print_help(sys.stderr)
    sys.exit(1)
  
  parsed_args = parser.parse_args()
  parsed_args.func(parsed_args)  
  
  return 0


if __name__ == "__main__":
  sys.exit(main())
