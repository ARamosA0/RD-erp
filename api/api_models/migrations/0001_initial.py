# Generated by Django 4.1.5 on 2023-03-03 16:37

import api_models.models
import cloudinary.models
from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Almacen',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('abreviacion', models.CharField(blank=True, max_length=20, null=True)),
                ('descripcion', models.CharField(default='-', max_length=400)),
                ('ubicacion', models.CharField(default='-', max_length=400)),
                ('borrado', models.BooleanField(default=False, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Areas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(default='UNDEFINED', max_length=100)),
                ('abreviacion', models.CharField(blank=True, max_length=20, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Articulo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('descripcion', models.CharField(default='-', max_length=100)),
                ('marca', models.CharField(default='-', max_length=100)),
                ('imagen', models.ImageField(blank=True, default='blancos.png', null=True, upload_to=api_models.models.upload_toArt, verbose_name='Image')),
                ('borrado', models.BooleanField(default=False, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='ArticuloVariante',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(default='-', max_length=100)),
                ('precio_unitario', models.FloatField(default=0.0, validators=[django.core.validators.MinValueValidator(0.0)])),
                ('cantidad', models.PositiveIntegerField(default=0)),
                ('ubicacion', models.CharField(default='-', max_length=300)),
                ('descripcion', models.CharField(default='-', max_length=500)),
                ('almacen', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api_models.almacen')),
                ('articulo', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='variantes', to='api_models.articulo')),
            ],
        ),
        migrations.CreateModel(
            name='Caja_diaria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_apertura', models.DateTimeField(auto_now_add=True, null=True)),
                ('fecha_cierre', models.DateTimeField(auto_now_add=True, null=True)),
                ('monto_total_inicial', models.FloatField(default=0, null=True)),
                ('monto_total_final', models.FloatField(default=0, null=True)),
                ('total_ventas', models.FloatField(default=0, null=True)),
                ('total_compras', models.FloatField(default=0, null=True)),
                ('estado', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('borrado', models.BooleanField(default=False, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Categoria_producto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('borrado', models.BooleanField(default=False, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Compra',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateTimeField(null=True)),
                ('estado', models.BooleanField(blank=True, default=False, null=True)),
                ('detalle_entrega', models.TextField(blank=True, null=True)),
                ('totalCompra', models.FloatField(default=0, null=True)),
                ('imagen_fac_compra', cloudinary.models.CloudinaryField(blank=True, default='https://res.cloudinary.com/dm8aqmori/image/upload/v1675259440/erp/Blancos_aoyyl7.png', max_length=255, null=True, verbose_name='imagen_fac_compra')),
                ('descuento', models.FloatField(default=0, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='CompraDetalle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('unidad', models.PositiveIntegerField(default=1)),
                ('cantidad', models.PositiveIntegerField(default=0)),
                ('precio_unitario', models.FloatField(default=0)),
                ('dscto_unitario', models.FloatField(blank=True, default=0, null=True)),
                ('remision_hecha', models.BooleanField(blank=True, default=False, null=True)),
                ('articulo', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.articulovariante')),
                ('compra', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='detalle_compra', to='api_models.compra')),
            ],
        ),
        migrations.CreateModel(
            name='Embalajes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('borrado', models.BooleanField(default=False, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Empresa',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(default='-', max_length=100)),
                ('ruc', models.CharField(default='-', max_length=100)),
                ('estructurajuridica', models.CharField(default='-', max_length=100)),
                ('tipo', models.CharField(default='-', max_length=100)),
                ('localidad', models.CharField(default='-', max_length=100)),
                ('direccion', models.CharField(default='-', max_length=500)),
                ('codpostal', models.CharField(default='-', max_length=100)),
                ('cuentabancaria', models.CharField(default='-', max_length=100)),
                ('telefono', models.CharField(default='-', max_length=100)),
                ('movil', models.CharField(default='-', max_length=100)),
                ('web', models.CharField(default='-', max_length=100)),
                ('borrado', models.BooleanField(default=False, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Entidades',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombreentidad', models.CharField(max_length=100)),
                ('borrado', models.BooleanField(default=False, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Factura',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField(null=True)),
                ('iva', models.IntegerField()),
                ('totalfactura', models.FloatField(default=0, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Formapago',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombrefp', models.CharField(max_length=100)),
                ('borrado', models.BooleanField(default=False, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Impuestos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('valor', models.FloatField(validators=[django.core.validators.MinValueValidator(0.0)])),
                ('borrado', models.BooleanField(default=False, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Orden_compra_servicio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_orden_servicio', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Persona',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(default='-', max_length=100)),
                ('dni', models.CharField(default='-', max_length=100)),
                ('localidad', models.CharField(default='-', max_length=100)),
                ('direccion', models.CharField(default='-', max_length=500)),
                ('codpostal', models.CharField(default='-', max_length=100)),
                ('cuentabancaria', models.CharField(default='-', max_length=100)),
                ('telefono', models.CharField(default='-', max_length=100)),
                ('movil', models.CharField(default='-', max_length=100)),
                ('web', models.CharField(default='-', max_length=100)),
                ('borrado', models.BooleanField(default=False, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Produccion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_inicio', models.DateField(auto_now_add=True)),
                ('fecha_fin', models.DateField()),
                ('estdo_produccion', models.CharField(choices=[('No Iniciado', 'No Iniciado'), ('En proceso', 'En proceso'), ('Terminado', 'Terminado'), ('Saliendo', 'Saliendo')], default='No Iniciado', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('cantidad', models.IntegerField(default=0)),
                ('descripcion_producto', models.TextField(blank=True, null=True)),
                ('imagen', models.ImageField(blank=True, default='media/blancos.png', null=True, upload_to=api_models.models.upload_toProd, verbose_name='Image')),
                ('borrado', models.BooleanField(default=False, null=True)),
                ('categoria', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='categoria_producto', to='api_models.categoria_producto')),
            ],
        ),
        migrations.CreateModel(
            name='Provincias',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombreprovincia', models.CharField(max_length=100)),
                ('borrado', models.BooleanField(default=False, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Remision_venta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_remision', models.DateField(auto_now_add=True)),
                ('contador', models.IntegerField(default=0, null=True)),
                ('estado', models.CharField(choices=[('No Enviado', 'No Enviado'), ('Enviado', 'Enviado')], default='No Enviado', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='RemisionCompra',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('compra', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='remision_compra', to='api_models.compra')),
            ],
        ),
        migrations.CreateModel(
            name='RequerimientoSalida',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_solicitud', models.DateField(auto_now_add=True)),
                ('fecha_entrega', models.DateField()),
                ('cantidad_solicitada', models.PositiveIntegerField(default=0)),
                ('cantidad_recibida', models.PositiveIntegerField(default=0)),
                ('estado', models.CharField(choices=[('completo', 'completo'), ('incompleto', 'incompleto')], default='incompleto', max_length=100)),
                ('area_entrega', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='area_entrega', to='api_models.areas')),
                ('area_solicitante', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='area_solicitante', to='api_models.areas')),
                ('articulo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.articulo')),
            ],
        ),
        migrations.CreateModel(
            name='Unidad',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('valor', models.PositiveIntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Venta_clie',
            fields=[
                ('factura', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='api_models.factura')),
                ('estadoprod', models.BooleanField(default=False, null=True)),
                ('contador_productos', models.IntegerField(default=0, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Venta_clie_detalle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.IntegerField()),
                ('precio', models.FloatField()),
                ('importe', models.FloatField(null=True)),
                ('dsctoproducto', models.FloatField()),
                ('remision_hecha', models.BooleanField(blank=True, default=False, null=True)),
                ('codproducto', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.producto')),
                ('venta_clie', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.venta_clie')),
            ],
        ),
        migrations.CreateModel(
            name='Trabajador',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo_trabajador', models.CharField(choices=[('Interno', 'Interno'), ('Contratista', 'Contratista'), ('Ninguno', 'Ninguno')], default='Ninguno', max_length=30)),
                ('borrado', models.CharField(default=0, max_length=1)),
                ('area', models.ForeignKey(default=api_models.models.get_default_area, on_delete=django.db.models.deletion.CASCADE, to='api_models.areas')),
                ('persona', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.persona')),
            ],
        ),
        migrations.CreateModel(
            name='Servicios',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200)),
                ('descripcion', models.TextField()),
                ('precio', models.FloatField()),
                ('contratista', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.trabajador')),
            ],
        ),
        migrations.CreateModel(
            name='Servicio_compra',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_compra', models.DateField()),
                ('fecha_inicio', models.DateField()),
                ('fecha_fin', models.DateField()),
                ('precio_compra', models.FloatField(null=True)),
                ('orden_compra', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.orden_compra_servicio')),
                ('servicio', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.servicios')),
            ],
        ),
        migrations.CreateModel(
            name='SalidaRequerimientoSalida',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField(auto_now_add=True)),
                ('descripcion', models.CharField(max_length=300)),
                ('cantidad', models.PositiveIntegerField(default=0)),
                ('almacen', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.almacen')),
                ('requerimiento', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.requerimientosalida')),
                ('trabajador', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.trabajador')),
                ('unidad', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.unidad')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='requerimientosalida',
            name='trabajador_entrega',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='trabajador_entrega', to='api_models.trabajador'),
        ),
        migrations.AddField(
            model_name='requerimientosalida',
            name='trabajador_solicitante',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='trabajador_solicitante', to='api_models.trabajador'),
        ),
        migrations.AddField(
            model_name='requerimientosalida',
            name='unidad_recibida',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='unidad_recibida', to='api_models.unidad'),
        ),
        migrations.AddField(
            model_name='requerimientosalida',
            name='unidad_solicitada',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='unidad_solicitante', to='api_models.unidad'),
        ),
        migrations.CreateModel(
            name='RemisionDetalleCompra',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField(auto_now_add=True)),
                ('compra_detalle', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.compradetalle')),
                ('remision_compra', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='remision_compra_detalle', to='api_models.remisioncompra')),
                ('trabajador', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api_models.trabajador')),
            ],
        ),
        migrations.CreateModel(
            name='Remision_venta_detalle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codproducto', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.venta_clie_detalle')),
                ('codremision', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.remision_venta')),
            ],
        ),
        migrations.CreateModel(
            name='Recibir_orden_servicio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_pedido', models.DateTimeField()),
                ('costo_total', models.FloatField()),
                ('orden_compra_referencia', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.orden_compra_servicio')),
            ],
        ),
        migrations.CreateModel(
            name='Proveedores',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ruc', models.CharField(max_length=100)),
                ('borrado', models.BooleanField(default=False, null=True)),
                ('empresa', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.empresa')),
                ('persona', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.persona')),
            ],
        ),
        migrations.CreateModel(
            name='Profile_User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Producto_variante',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('descripcion', models.CharField(blank=True, max_length=100, null=True)),
                ('color', models.CharField(blank=True, default='-', max_length=100, null=True)),
                ('talla', models.CharField(blank=True, default='-', max_length=100, null=True)),
                ('horas_manufactura', models.IntegerField(default=0)),
                ('costo_manufactura', models.FloatField(default=0.0, validators=[django.core.validators.MinValueValidator(0.0)])),
                ('gastos_generales', models.FloatField(default=30.0, validators=[django.core.validators.MinValueValidator(0.0)])),
                ('precio_final', models.FloatField(default=0.0, validators=[django.core.validators.MinValueValidator(0.0)])),
                ('borrado', models.BooleanField(default=False, null=True)),
                ('producto', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='producto_variante', to='api_models.producto')),
            ],
        ),
        migrations.CreateModel(
            name='Producto_detalle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.IntegerField(default=0)),
                ('borrado', models.BooleanField(default=False, null=True)),
                ('articulo', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='variantes', to='api_models.articulovariante')),
                ('variante', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='producto_detalle', to='api_models.producto_variante')),
            ],
        ),
        migrations.CreateModel(
            name='Produccion_detalle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('estdo_produccion_prod', models.CharField(choices=[('No Iniciado', 'No Iniciado'), ('En proceso', 'En proceso'), ('Terminado', 'Terminado'), ('Saliendo', 'Saliendo')], default='No Iniciado', max_length=100)),
                ('cod_producto', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.venta_clie_detalle')),
                ('produccion', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.produccion')),
            ],
        ),
        migrations.AddField(
            model_name='persona',
            name='codprovincia',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.provincias'),
        ),
        migrations.AddField(
            model_name='orden_compra_servicio',
            name='trabajador',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.trabajador'),
        ),
        migrations.CreateModel(
            name='Libro_diario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo', models.CharField(choices=[('Compra', 'Compra'), ('Venta', 'Venta'), ('Ninguno', 'Ninguno')], default='Ninguno', max_length=20)),
                ('obtener_factura', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.factura')),
            ],
        ),
        migrations.CreateModel(
            name='EntradaAlmacenCompra',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateTimeField(auto_now_add=True)),
                ('descripcion', models.CharField(default='-', max_length=300)),
                ('estado', models.BooleanField(blank=True, default=False, null=True)),
                ('remision', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.remisiondetallecompra')),
                ('trabajador_receptor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='trabajador_receptor', to='api_models.trabajador')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='empresa',
            name='codprovincia',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.provincias'),
        ),
        migrations.AddField(
            model_name='compra',
            name='proveedor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.proveedores'),
        ),
        migrations.CreateModel(
            name='Clientes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('borrado', models.BooleanField(default=False, null=True)),
                ('codformapago', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.formapago')),
                ('empresa', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.empresa')),
                ('persona', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.persona')),
            ],
        ),
        migrations.AddField(
            model_name='articulovariante',
            name='embalaje',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.embalajes'),
        ),
        migrations.AddField(
            model_name='articulo',
            name='categoria',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='api_models.categoria'),
        ),
        migrations.AddField(
            model_name='articulo',
            name='proveedor',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.proveedores'),
        ),
        migrations.CreateModel(
            name='AlmacenProductosTerminados',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.PositiveIntegerField(default=0)),
                ('ubicacion', models.CharField(default='-', max_length=300)),
                ('observaciones', models.CharField(default='-', max_length=500)),
                ('almacen', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.almacen')),
                ('productos_terminados', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.producto')),
            ],
        ),
        migrations.AddField(
            model_name='venta_clie',
            name='codcliente',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.clientes'),
        ),
        migrations.CreateModel(
            name='SalidaVenta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField(auto_now_add=True)),
                ('descripcion', models.CharField(max_length=300)),
                ('cantidad', models.PositiveIntegerField(default=0)),
                ('almacen', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.almacen')),
                ('trabajador', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.trabajador')),
                ('unidad', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.unidad')),
                ('venta', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.venta_clie')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='remision_venta',
            name='factura_venta_clie',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_models.venta_clie'),
        ),
        migrations.AddField(
            model_name='produccion',
            name='factura_clie',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.venta_clie'),
        ),
        migrations.CreateModel(
            name='Caja_tipo_pago',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_tipo_pago', models.FloatField(null=True)),
                ('caja_diaria', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.caja_diaria')),
                ('compra', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.compra')),
                ('tipo_pago', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.formapago')),
                ('venta', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api_models.venta_clie')),
            ],
        ),
    ]
