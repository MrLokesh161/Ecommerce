# Generated by Django 5.0.1 on 2024-01-04 02:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_orders_delivery_charges'),
    ]

    operations = [
        migrations.AddField(
            model_name='orders',
            name='total_cost',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]