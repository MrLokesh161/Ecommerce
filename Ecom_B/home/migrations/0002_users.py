# Generated by Django 5.0 on 2023-12-14 07:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, null=True)),
                ('username', models.CharField(max_length=100)),
                ('age', models.IntegerField(null=True)),
                ('number', models.CharField(null=True)),
                ('password', models.CharField(max_length=50)),
                ('referalID', models.CharField(max_length=105)),
                ('doj', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]