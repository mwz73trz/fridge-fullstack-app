from rest_framework.serializers import ModelSerializer
from .models import *

class FoodSerializer(ModelSerializer):
    class Meta:
        model = Food
        fields = ['id', 'title', 'amount', 'amount_type', 'best_before_end']