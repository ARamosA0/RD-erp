# Generated by Django 4.1.5 on 2023-02-24 17:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_models', '0002_alter_compra_fecha'),
    ]

    operations = [
        migrations.AlterField(
            model_name='compradetalle',
            name='cantidad',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='compradetalle',
            name='unidad',
            field=models.PositiveIntegerField(default=1),
        ),
    ]
