from django.shortcuts import render
from .models import Receta,Autor
# Create your views here.
def index(request):
	receta = Autor.objects.all()
	print(receta)
	context={
	'receta':receta
	}
	return render(request,'index.html',context)


