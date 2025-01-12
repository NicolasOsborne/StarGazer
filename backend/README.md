# Projet StarGazer - API Back-End - Symfony

Ce dossier contient le Back-End de l'application StarGazer permettant de récupérer les données de la base de données d'objets célestes via une API.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- PHP >= 8.0
- [Composer](https://getcomposer.org/download/) version 2.7.9
- Symfony CLI version 5.10.2
- MySQL
- Git (optionnel mais recommandé)

## Installation

### 1. Cloner le dépôt

Clonez ce dépôt dans votre environnement local.

```bash
git clone https://github.com/votre-nom-utilisateur/StarGazer.git
cd backend/api_etoiles
```

### 2. Dépendances

Vérifiez que les dépendances sont bien installées, vous pouvez les installer en lançant la commande suivante :

```bash
- composer install
```

### 3. Créer la base de données

Vérifiez dans le fichier .env que vous avez bien remplacé votre identifiant et mot de passe phpMyAdmin, puis lancez la commande suivante pour créer la base de données :

```bash
- symfony console doctrine:database:create
```

### 4. Lancer les migrations

Lancez les migrations des entités vers la base de données avec ces commandes :

```bash
- symfony console doctrine:schema:update --force
```

ou

```bash
- symfony console make:migration
- symfony console doctrine:migrations:migrate
```

Enfin, démarrez le serveur local :

```bash
- symfony server:start
```

En cas d'erreur CORS et de conflit HTTP/HTTPS entre le serveur Symfony et le frontend React utilisez cette commande :

```bash
- symfony server:start --no-tls
```
