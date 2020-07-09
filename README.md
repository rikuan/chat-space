# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# データベース設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false,unique true|
|email|string|null: false,unique true|
|password|string|null:false|

### Association
- has_many :group
- has_many :messege
- has_many :image


## messegesテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|body|text|null; false|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
- has_many :image

## imagesテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|messege_id|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :messege
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|messege_id|integer|null: false, foreign_key: true|

### Association
- has_many :messege
- belongs_to :user