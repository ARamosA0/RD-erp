# Generated by Django 4.1.5 on 2023-02-20 08:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api_models', '0016_remove_remisioncompra_fecha_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='remisiondetallecompra',
            name='trabajador',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api_models.trabajador'),
        ),
    ]