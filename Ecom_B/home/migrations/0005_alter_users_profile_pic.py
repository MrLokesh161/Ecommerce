# Generated by Django 5.0 on 2023-12-23 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_alter_users_dob'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='profile_pic',
            field=models.ImageField(blank=True, null=True, upload_to='profilePic/'),
        ),
    ]
