# Gump Project

Gump est un outil d'édition d'images, de dessin vectoriel et de dessin 2D.
Auto-proclamé successeur de GIMP, il est programmé à d'[Angular](https://angular.io/) et de sa libraire [Angular Material](https://material.angular.io/).

## Installation des prérequis

### Node.js

Node.js est un environnement d'exécution JavaScript. Il est nécessaire pour compiler le projet.
Pour l'installer, il faut télécharger le fichier d'installation correspondant à votre système d'exploitation sur le site [https://nodejs.org/en/download/](https://nodejs.org/en/download/).

### Angular CLI

Angular CLI est un outil en ligne de commande permettant de créer et de gérer des projets Angular.
Pour l'installer, il faut ouvrir un terminal et lancer la commande suivante :
```bash
npm install -g @angular/cli
```

## Récupérer le projet

Pour récupérer le projet, il faut cloner le dépôt git.
```bash
git clone https://github.com/GinierClasses/322-426-projet-sasha.git
```
Alternativement, vous pouvez télécharger le projet en cliquant sur le bouton "Clone or download" puis "Download ZIP".
Il est également possible d'utiliser [GitHub Desktop](https://desktop.github.com/).

## Installer les dépendances

Pour installer les dépendances, il faut se placer dans le dossier du projet et lancer la commande suivante :
```bash
npm install
```
Cette commande va installer les dépendances du projet. (Contenu du fichier `package.json`)

## Serveur de développement

Pour lancer le serveur de développement, il faut se placer dans le dossier du projet et lancer la commande suivante :
```bash
ng serve
```
ou 
```bash
npm run start
```
Le serveur est accessible à l'adresse [http://localhost:4200/](http://localhost:4200/).

## Compiler le projet

Pour compiler le projet, il faut se placer dans le dossier du projet et lancer la commande suivante :
```bash
ng build
```
ou
```bash
npm run build
```
Le projet compilé est disponible dans le dossier `dist/`.

## Utiliser le linter

Pour utiliser le linter, il faut se placer dans le dossier du projet et lancer la commande suivante :
```bash
ng lint
```
ou
```bash
npm run lint
```
