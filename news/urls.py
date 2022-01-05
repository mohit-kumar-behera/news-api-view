from django.urls import path,include
from . import views

app_name = 'news'

urlpatterns = [
	path('', views.redirect_home, name="redirect_home"),
	path('news/', views.redirect_home, name="redirect_home"),
	path('news/<str:countryCode>', views.home, name='home')
]
