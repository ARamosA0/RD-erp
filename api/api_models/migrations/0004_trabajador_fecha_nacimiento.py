# Generated by Django 4.1.5 on 2023-06-01 15:12

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api_models', '0003_trabajador_cargo_trabajador_tipo_contrato'),
    ]

    operations = [
        migrations.AddField(
            model_name='trabajador',
            name='fecha_nacimiento',
            field=models.DateField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
