from django.db import models

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=200)
    genre = models.CharField(max_length=100)
    description = models.TextField()
    owner = models.ForeignKey('users.User', related_name='reviews', on_delete=models.CASCADE)


    def __str__(self):
        return self.title

