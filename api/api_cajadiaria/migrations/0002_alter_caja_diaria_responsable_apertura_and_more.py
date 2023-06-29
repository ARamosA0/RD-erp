# Generated by Django 4.1.5 on 2023-06-24 02:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api_models', '0001_initial'),
        ('api_cajadiaria', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='caja_diaria',
            name='responsable_apertura',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='responsable_apertura', to='api_models.trabajador'),
        ),
        migrations.AlterField(
            model_name='caja_diaria',
            name='responsable_cierre',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='responsable_cierre', to='api_models.trabajador'),
        ),
        migrations.AlterField(
            model_name='registros_caja',
            name='responsable',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.trabajador'),
        ),
    ]