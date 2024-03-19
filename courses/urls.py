from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from courses import views

r = routers.DefaultRouter()
r.register('categories', views.CategoriesViews, basename='categories')
r.register('courses', views.CoursesViewSet, basename='courses')
r.register('lessons', views.LessonViewSet, basename='lessons')
r.register('users', views.UserViewSet, basename='users')

urlpatterns = [
    path('', include(r.urls))
]