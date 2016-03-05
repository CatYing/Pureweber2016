from django.contrib import admin
from models import *
# Register your models here.

class PersonAdmin(admin.ModelAdmin):
    list_display = ('name', 'student_num', 'college', 'phone', 'qq')
admin.site.register(Person,PersonAdmin)