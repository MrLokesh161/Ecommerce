# Generated by Django 5.0 on 2023-12-18 10:31

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]
 
    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('productID', models.CharField(unique=True)),
                ('images', models.ImageField(upload_to='media/')),
                ('mrp', models.DecimalField(decimal_places=2, max_digits=10, validators=[django.core.validators.MinValueValidator(1)])),
                ('discount', models.IntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(100)])),
                ('sellingPrice', models.IntegerField()),
                ('stock', models.IntegerField()),
                ('rating', models.DecimalField(decimal_places=6, max_digits=10, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(0)])),
                ('freeDelivery', models.BooleanField(default=True)),
                ('specification', models.TextField()),
                ('slug', models.SlugField(default='', null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, null=True)),
                ('username', models.CharField(max_length=100, unique=True)),
                ('age', models.IntegerField(null=True)),
                ('number', models.CharField(null=True, unique=True)),
                ('password', models.CharField(max_length=50)),
                ('referalID', models.CharField(max_length=105)),
                ('doj', models.DateTimeField(auto_now_add=True)),
                ('slug', models.SlugField(default='', null=True, unique=True)),
                ('lastOTP', models.IntegerField(null=True)),
                ('otpSent', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
    ]
