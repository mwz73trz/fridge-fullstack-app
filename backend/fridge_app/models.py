from django.db import models
from django.core.validators import MinValueValidator
from .enums import Measurement

class Food(models.Model):
    title = models.CharField(max_length=25)
    amount = models.IntegerField(validators=[MinValueValidator(0)])
    amount_type = models.CharField(max_length=6, choices=Measurement.choices, default=Measurement.NOTHING)
    best_before_end = models.DateField()

    def __str__(self):
        return f'{self.title}'


