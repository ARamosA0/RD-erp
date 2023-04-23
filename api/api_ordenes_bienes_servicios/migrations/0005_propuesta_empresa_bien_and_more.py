# Generated by Django 4.1.5 on 2023-04-23 00:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api_models', '0001_initial'),
        ('api_ordenes_bienes_servicios', '0004_propuesta_empresa_propuesta_empresa_documentos_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Propuesta_Empresa_Bien',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_registro', models.DateField(auto_now_add=True)),
                ('fecha_ultima_modificacion', models.DateField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Propuesta_Empresa_Bien_Documentos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('propuesta_tecnica_documento', models.FileField(blank=True, null=True, upload_to='documents/propuesta_tecnica')),
                ('propuesta_economica_documento', models.FileField(blank=True, null=True, upload_to='documents/propuesta_economica')),
                ('bien_cotizacion_archivo', models.FileField(blank=True, null=True, upload_to='documents/cotizacion')),
                ('fecha_registro', models.DateField(auto_now_add=True)),
                ('fecha_ultima_modificacion', models.DateField(auto_now=True)),
                ('propuesta_empresa', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='propuesta_empresa_bien', to='api_ordenes_bienes_servicios.propuesta_empresa_bien')),
            ],
        ),
        migrations.RemoveField(
            model_name='propuesta_empresa_documentos',
            name='propuesta_empresa',
        ),
        migrations.RemoveField(
            model_name='orden_bien',
            name='bien_cotizacion_archivo',
        ),
        migrations.DeleteModel(
            name='Propuesta_Empresa',
        ),
        migrations.DeleteModel(
            name='Propuesta_Empresa_Documentos',
        ),
        migrations.AddField(
            model_name='propuesta_empresa_bien',
            name='orden_bien',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='orden_bien', to='api_ordenes_bienes_servicios.orden_bien'),
        ),
        migrations.AddField(
            model_name='propuesta_empresa_bien',
            name='propuesta_proveedor',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.proveedores'),
        ),
    ]
