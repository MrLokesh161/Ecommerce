# Generated by Django 5.0 on 2023-12-23 09:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_alter_users_age'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='dob',
            field=models.DateField(blank=True, null=True),
        ),
    ]