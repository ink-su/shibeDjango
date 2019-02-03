from django.db import models
from django.contrib.auth.models import User
import uuid;

# Create your models here.
class Tasks(models.Model):
    uid = models.CharField(max_length=100, unique=True, default=uuid.uuid4)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    def as_dict(self):
        return {
            'taskCode' : self.uid,
            'taskTitle': self.title,
            'taskDescription': self.description,
            'owner': self.owner.id,
        }