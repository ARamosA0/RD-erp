# Generated by Django 4.1.5 on 2023-02-15 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_models', '0003_almacen_abreviacion'),
    ]

    operations = [
        migrations.AlterField(
            model_name='areas',
            name='nombre',
            field=models.CharField(default='UNDEFINED', max_length=100),
        ),
    ]