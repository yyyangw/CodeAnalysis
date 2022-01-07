# -*- coding: utf-8 -*-
# Copyright (c) 2021-2022 THL A29 Limited
#
# This source code file is made available under MIT License
# See LICENSE for details
# ==============================================================================

# Generated by Django 3.1.12 on 2021-11-29 11:34
"""
base数据迁移脚本
0001_initial
"""
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            # base_operationrecord
            name='OperationRecord',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('scenario_key', models.CharField(db_index=True, max_length=128, verbose_name='场景Key')),
                ('action', models.CharField(max_length=128, verbose_name='操作')),
                ('message', models.TextField(blank=True, null=True, verbose_name='信息')),
                ('created_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('creator', models.CharField(max_length=64, verbose_name='创建人')),
            ],
        ),
        migrations.CreateModel(
            # base_origin
            name='Origin',
            fields=[
                ('name', models.CharField(max_length=64, primary_key=True, serialize=False, verbose_name='渠道')),
            ],
        ),
    ]
