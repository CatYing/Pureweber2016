from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Person(models.Model):
    name = models.CharField(max_length=256)
    student_num = models.CharField(max_length=16)
    college = models.CharField(max_length=512)
    phone = models.CharField(max_length=16)
    qq = models.CharField(max_length=16)
    introduction = models.TextField()

    def __unicode__(self):
        return self.name