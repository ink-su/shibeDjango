from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.
class Dogs(models.Model):
    dog_id = models.IntegerField()
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,)

    def as_dict(self):
        return {
            'dog_id' : self.dog_id,
            'owner': self.owner.id,
        }