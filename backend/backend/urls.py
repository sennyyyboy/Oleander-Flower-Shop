from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from rest_framework.routers import DefaultRouter
from flowers.views import FlowerViewSet

router = DefaultRouter()
router.register(r'flowers', FlowerViewSet)


def home(request):
    return HttpResponse("Oleander Flower Shop")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', home),  # Add this line to handle requests to '/'
] 
