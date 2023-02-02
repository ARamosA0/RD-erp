from rest_framework import routers

from .views import *

router = routers.DefaultRouter()

router.register('provincias', ProvinciasViewSet, 'provincia')
router.register('entidades', EntidadesViewSet, 'entidad')
router.register('impuestos', ImpuestosViewSet, 'impuesto')
router.register('embalajes', EmbalajesViewSet, 'embalaje')
router.register('formapage', FormaPagoViewSet, 'formapago')

urlpatterns = router.urls