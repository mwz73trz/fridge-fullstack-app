from django.db import models

class Measurement(models.TextChoices):
    TABLESPOON = "tbsp"
    TEASPOON = "tsp"
    OUNCE = "oz"
    FLUID_OUNCE = "fl. oz"
    CUP = "c"
    QUART = "qt"
    PINT = "pt"
    GALLON = "gal"
    POUND = "lb"
    MILLILITRE = "ml"
    GRAM = "g"
    KILOGRAM = "kg"
    LITRE = "l"
    NOTHING = " "