from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .models import *

class FoodViewSet(ModelViewSet):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
