from django.urls import path,include
from .api import api
urlpatterns = [
    path('',api.urls)
]