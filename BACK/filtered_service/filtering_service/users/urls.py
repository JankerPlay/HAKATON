from django.urls import path
from rest_framework import routers

from .views.register import RegisterAPI
from .views.login import LoginView
from .views.logout import LogoutView

urlpatterns = [
    path('register/', RegisterAPI.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
]