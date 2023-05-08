from django.urls import path

from . import views

app_name = 'web'

urlpatterns = [
    #ALUMNOS
    path('', views.AlumnoView.as_view(),name='index'),
    path('delete/<int:alumno_id>/', views.Delete,name='delete'),
    path('update/<int:alumno_id>/', views.updateForm,name='update'),
    path('updateAlumno/<int:alumno_id>/', views.update,name='updateAlumno'),
    #PROFESORES
    path('profesor/', views.ProfesorView.as_view(),name='profesor'),
    path('deleteProfesor/<int:profesor_id>/', views.DeleteProfesor, name='deleteProfesor'),
    path('updateFormProfesor/<int:profesor_id>/', views.updateFormProfesor,name='updateForm'),
    path('updateProfesor/<int:profesor_id>/', views.updateProfesor,name='updateProfesor'),
    #INDEX
    path('home/', views.IndexView.as_view(),name='home'),
]