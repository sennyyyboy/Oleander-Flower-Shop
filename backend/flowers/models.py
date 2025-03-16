from django.db import models

class Flower(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    description = models.TextField(blank=True)
    stock = models.PositiveIntegerField()
    image_url = models.URLField(blank=True)

    def str(self):
        return self.name