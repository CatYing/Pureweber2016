# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-02-29 23:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('student_num', models.CharField(max_length=16)),
                ('college', models.CharField(max_length=512)),
                ('phone', models.CharField(max_length=16)),
                ('qq', models.CharField(max_length=16)),
                ('introduction', models.TextField()),
            ],
        ),
    ]
