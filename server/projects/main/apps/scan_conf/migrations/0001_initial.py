# -*- coding: utf-8 -*-
# Copyright (c) 2021-2022 THL A29 Limited
#
# This source code file is made available under MIT License
# See LICENSE for details
# ==============================================================================

# Generated by Django 3.1.12 on 2021-11-29 11:34
"""
scan_conf数据迁移脚本
0001_initial
"""
import django.db.models.manager
from django.conf import settings
from django.db import migrations, models

import apps.base.basemodel


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('authen', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            # scan_conf_checkpackage
            name='CheckPackage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='创建时间')),
                ('modified_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='最近修改时间')),
                ('deleted_time', models.DateTimeField(blank=True, db_index=True, null=True, verbose_name='删除时间')),
                ('name', models.CharField(help_text='规则包名称', max_length=64, unique=True)),
                ('description', models.CharField(blank=True, help_text='规则包描述', max_length=512, null=True)),
                ('package_type', models.IntegerField(choices=[(1, '自定义'), (2, '官方')], help_text='规则包类型')),
                ('revision', models.CharField(blank=True, help_text='版本号', max_length=32, null=True)),
                ('open_saas', models.BooleanField(default=False, help_text='公有云是否可用')),
                ('status', models.IntegerField(choices=[(1, '已启用'), (2, '测试中'), (3, '隐藏中'), (9, '已禁用')],
                                               default=1, help_text='规则包状态')),
                ('disable', models.BooleanField(default=False, help_text='规则包是否可用')),
                ('envs', models.TextField(blank=True, help_text='环境变量', null=True)),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('everything', django.db.models.manager.Manager()),
            ],
        ),
        migrations.CreateModel(
            # scan_conf_checkrule
            name='CheckRule',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='创建时间')),
                ('modified_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='最近修改时间')),
                ('deleted_time', models.DateTimeField(blank=True, db_index=True, null=True, verbose_name='删除时间')),
                ('display_name', models.CharField(help_text='规则展示名称', max_length=64)),
                ('real_name', models.CharField(help_text='规则真实名称', max_length=128)),
                ('rule_title', models.CharField(blank=True, help_text='规则标题', max_length=512, null=True)),
                ('category', models.IntegerField(blank=True,
                                                 choices=[(1, '功能'), (2, '安全'), (3, '性能'), (4, '可用性'),
                                                          (5, '无障碍化'), (6, '国际化'), (7, '代码风格'), (8, '其他')],
                                                 default=8, help_text='规则类别', null=True)),
                ('severity',
                 models.IntegerField(blank=True, choices=[(1, '致命'), (2, '错误'), (3, '警告'), (4, '提示')], default=4,
                                     help_text='严重级别', null=True)),
                ('rule_params', models.TextField(blank=True, help_text='规则参数', null=True)),
                ('custom', models.BooleanField(blank=True, default=False, help_text='是否为自定义规则')),
                ('disable', models.BooleanField(blank=True, default=False, help_text='规则失效')),
                ('disabled_time', models.DateTimeField(blank=True, null=True)),
                ('disabled_reason', models.CharField(blank=True, help_text='失效原因', max_length=64, null=True)),
                ('owner', models.CharField(blank=True, help_text='规则负责人', max_length=32, null=True)),
                ('solution', models.TextField(blank=True, help_text='解决方法', null=True)),
                ('tool_key', models.CharField(help_text="工具key值, org_'<org_id>'", max_length=64, null=True)),
            ],
            managers=[
                ('everything', django.db.models.manager.Manager()),
            ],
        ),
        migrations.CreateModel(
            # scan_conf_checktool
            name='CheckTool',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='创建时间')),
                ('modified_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='最近修改时间')),
                ('deleted_time', models.DateTimeField(blank=True, db_index=True, null=True, verbose_name='删除时间')),
                ('name', models.CharField(help_text='工具名称', max_length=64, unique=True)),
                ('virtual_name', models.CharField(blank=True, help_text='工具虚拟名称', max_length=64, null=True)),
                ('display_name', models.CharField(blank=True, help_text='工具展示名称', max_length=64, null=True)),
                ('show_display_name', models.BooleanField(default=False, help_text='是否使用工具展示名称')),
                ('license', models.CharField(blank=True, help_text='License', max_length=64, null=True)),
                ('description', models.CharField(help_text='工具描述', max_length=256)),
                ('open_maintain', models.BooleanField(default=False, help_text='是否所有人可协同')),
                ('open_user', models.BooleanField(default=False, help_text='是否所有人可用')),
                ('open_saas', models.BooleanField(default=False, help_text='是否公有云可用')),
                ('status', models.IntegerField(choices=[(0, '正常运营'), (1, '暂停使用'), (2, '已下架'), (3, '体验运营')],
                                               default=0, help_text='工具状态')),
                ('scm_url', models.CharField(blank=True, help_text='工具仓库地址', max_length=128, null=True)),
                ('run_cmd', models.CharField(blank=True, help_text='工具执行命令，工作目录为git工具库根目录', max_length=128,
                                             null=True)),
                ('envs', models.TextField(blank=True, help_text='环境变量', null=True)),
                ('build_flag', models.BooleanField(default=False, help_text='是否是编译型工具')),
                ('scm_type',
                 models.CharField(choices=[('cc', 'ClearCase'), ('git', 'Git'), ('svn', 'SVN')], default='git',
                                  help_text='代码库类型', max_length=16)),
                ('tool_key', models.CharField(help_text="工具key值，org_'<org_id>'", max_length=64, null=True)),
                ('co_owners',
                 models.ManyToManyField(help_text='协同人', related_name='co_checktools', to=settings.AUTH_USER_MODEL)),
                ('creator', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                              related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='创建人')),
                ('deleter', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                              related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='删除人')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('everything', django.db.models.manager.Manager()),
            ],
        ),
        migrations.CreateModel(
            # scan_conf_label
            name='Label',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='标签名', max_length=64, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(
                    choices=[('cpp', 'C/C++'), ('java', 'Java'), ('js', 'JavaScript'), ('oc', 'Objective-C'),
                             ('php', 'PHP'), ('python', 'Python'), ('cs', 'C#'), ('ruby', 'Ruby'), ('kotlin', 'Kotlin'),
                             ('Go', 'Go'), ('Lua', 'Lua'), ('swift', 'Swift'), ('html', 'Html'), ('css', 'Css'),
                             ('ts', 'TypeScript'), ('scala', 'Scala'), ('visualbasic', 'Visual Basic'),
                             ('plsql', 'PL/SQL'), ('cobol', 'COBOL'), ('abap', 'ABAP'), ('tsql', 'T-SQL'),
                             ('flex', 'Flex'), ('rpg', 'RPG'), ('apex', 'Apex'), ('pli', 'PL/I'), ('xml', 'XML'),
                             ('dart', 'Dart'), ('shell', 'Shell')], help_text='程序语言', max_length=32, null=True)),
            ],
        ),
        migrations.CreateModel(
            # scan_conf_process
            name='Process',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='名称', max_length=64, unique=True)),
                ('display_name', models.CharField(help_text='展示名称', max_length=64)),
                ('priority', models.IntegerField(help_text='优先级')),
            ],
        ),
        migrations.CreateModel(
            # scan_conf_toollib
            name='ToolLib',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='创建时间')),
                ('modified_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='最近修改时间')),
                ('deleted_time', models.DateTimeField(blank=True, db_index=True, null=True, verbose_name='删除时间')),
                ('name', models.SlugField(help_text='依赖名称', max_length=64)),
                ('description', models.CharField(blank=True, help_text='依赖描述', max_length=128, null=True)),
                ('scm_url', models.CharField(help_text='依赖地址', max_length=128)),
                ('scm_type',
                 models.CharField(choices=[('git', 'Git'), ('svn', 'SVN'), ('link', 'Link')], help_text='依赖类型',
                                  max_length=16)),
                ('envs', models.JSONField(blank=True, help_text='环境变量', null=True)),
                ('lib_type', models.CharField(choices=[('private', '私有依赖'), ('public', '公共依赖')], default='private',
                                              help_text='依赖类型', max_length=16)),
                ('lib_os', models.CharField(blank=True, help_text='适用系统，按;分隔', max_length=128, null=True)),
                ('lib_key', models.CharField(help_text="lib key值，default，org_'<org_id>'", max_length=64)),
                ('extra_data', models.JSONField(blank=True, help_text='额外字段，如headers', null=True)),
                ('creator', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                              related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='创建人')),
                ('deleter', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                              related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='删除人')),
                ('modifier', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                               related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='最近修改人')),
                ('scm_auth',
                 models.ForeignKey(help_text='鉴权凭证', null=True, on_delete=django.db.models.deletion.SET_NULL,
                                   to='authen.scmbaseauth')),
            ],
            options={
                'unique_together': {('name', 'lib_key')},
            },
            managers=[
                ('everything', django.db.models.manager.Manager()),
            ],
        ),
        migrations.CreateModel(
            # scan_conf_toollibmap
            name='ToolLibMap',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pos', models.BigIntegerField(help_text='序号')),
            ],
            options={
                'ordering': ['pos'],
            },
        ),
        migrations.CreateModel(
            name='ToolProcessRelation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('priority', models.IntegerField(blank=True, help_text='优先级', null=True)),
                ('checktool', models.ForeignKey(help_text='工具', on_delete=django.db.models.deletion.CASCADE,
                                                to='scan_conf.checktool')),
                ('process', models.ForeignKey(help_text='任务子进程', on_delete=django.db.models.deletion.CASCADE,
                                              to='scan_conf.process')),
            ],
            options={
                'ordering': ['priority'],
                'unique_together': {('checktool', 'process')},
            },
        ),
        migrations.CreateModel(
            # scan_conf_toollibscheme
            name='ToolLibScheme',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='创建时间')),
                ('modified_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='最近修改时间')),
                ('deleted_time', models.DateTimeField(blank=True, db_index=True, null=True, verbose_name='删除时间')),
                ('condition', models.CharField(help_text='条件', max_length=128, null=True)),
                ('scheme_os', models.CharField(blank=True, help_text='适用系统', max_length=128, null=True)),
                ('default_flag', models.BooleanField(default=False, help_text='默认依赖')),
                ('checktool', models.ForeignKey(help_text='工具', on_delete=django.db.models.deletion.CASCADE,
                                                related_name='libscheme', to='scan_conf.checktool')),
                ('creator', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                              related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='创建人')),
                ('deleter', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                              related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='删除人')),
                ('modifier', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                               related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='最近修改人')),
                ('tool_libs', models.ManyToManyField(blank=True, help_text='工具依赖', related_name='libscheme',
                                                     through='scan_conf.ToolLibMap', to='scan_conf.ToolLib')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('everything', django.db.models.manager.Manager()),
            ],
        ),
        migrations.AddField(
            model_name='toollibmap',
            name='libscheme',
            field=models.ForeignKey(help_text='工具依赖方案', on_delete=django.db.models.deletion.CASCADE,
                                    related_name='toollibmap', to='scan_conf.toollibscheme'),
        ),
        migrations.AddField(
            model_name='toollibmap',
            name='toollib',
            field=models.ForeignKey(help_text='依赖', on_delete=django.db.models.deletion.CASCADE,
                                    related_name='toollibmap', to='scan_conf.toollib'),
        ),
        migrations.CreateModel(
            # scan_conf_scanapp
            name='ScanApp',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='创建时间')),
                ('modified_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='最近修改时间')),
                ('deleted_time', models.DateTimeField(blank=True, db_index=True, null=True, verbose_name='删除时间')),
                ('name',
                 models.CharField(help_text='必须是codedog/apps/下的包名', max_length=32, unique=True, verbose_name='扫描应用名')),
                ('label', models.CharField(max_length=64, verbose_name='扫描应用显示名')),
                ('desc', models.CharField(max_length=128, null=True, verbose_name='应用描述')),
                ('creator', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                              related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='创建人')),
                ('deleter', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                              related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='删除人')),
                ('modifier', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                               related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='最近修改人')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('everything', django.db.models.manager.Manager()),
            ],
        ),
        migrations.CreateModel(
            # scan_conf_packagereleaselog
            name='PackageReleaseLog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='创建时间')),
                ('modified_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='最近修改时间')),
                ('deleted_time', models.DateTimeField(blank=True, db_index=True, null=True, verbose_name='删除时间')),
                ('revision', models.CharField(help_text='版本号', max_length=32)),
                ('message', models.TextField(verbose_name='发布内容')),
                ('checkpackage', models.ForeignKey(help_text='规则包', on_delete=django.db.models.deletion.CASCADE,
                                                   to='scan_conf.checkpackage')),
                ('creator', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                              related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='创建人')),
                ('deleter', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                              related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='删除人')),
                ('modifier', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                               related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='最近修改人')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('everything', django.db.models.manager.Manager()),
            ],
        ),
        migrations.CreateModel(
            # scan_conf_packagemap
            name='PackageMap',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('severity',
                 models.IntegerField(blank=True, choices=[(1, '致命'), (2, '错误'), (3, '警告'), (4, '提示')],
                                     help_text='严重级别', null=True)),
                ('rule_params', models.TextField(blank=True, help_text='规则参数', null=True)),
                ('state', models.IntegerField(choices=[(1, '生效中'), (2, '已屏蔽')], default=1, help_text='状态')),
                ('checkpackage', models.ForeignKey(help_text='规则包', on_delete=django.db.models.deletion.CASCADE,
                                                   related_name='relation', to='scan_conf.checkpackage')),
                ('checkrule',
                 models.ForeignKey(help_text='规则', on_delete=django.db.models.deletion.CASCADE,
                                   related_name='relation', to='scan_conf.checkrule')),
                ('checktool', models.ForeignKey(help_text='工具', null=True, on_delete=django.db.models.deletion.CASCADE,
                                                to='scan_conf.checktool')),
            ],
        ),
        migrations.CreateModel(
            # scan_conf_checktoolwhitekey
            name='CheckToolWhiteKey',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tool_key', models.CharField(help_text="工具key值，org_'<org_id>'", max_length=64)),
                ('tool_id', models.IntegerField(help_text='工具id')),
            ],
            options={
                'unique_together': {('tool_key', 'tool_id')},
            },
        ),
        migrations.AddField(
            model_name='checktool',
            name='languages',
            field=models.ManyToManyField(help_text='支持的语言', related_name='checktool', to='scan_conf.Language'),
        ),
        migrations.AddField(
            model_name='checktool',
            name='modifier',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                    related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='最近修改人'),
        ),
        migrations.AddField(
            model_name='checktool',
            name='owners',
            field=models.ManyToManyField(help_text='负责人', related_name='own_checktools',
                                         to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='checktool',
            name='scan_app',
            field=models.ForeignKey(blank=True, help_text='应用', null=True,
                                    on_delete=django.db.models.deletion.CASCADE, to='scan_conf.scanapp'),
        ),
        migrations.AddField(
            model_name='checktool',
            name='scm_auth',
            field=models.ForeignKey(blank=True, help_text='工具授权凭证', null=True,
                                    on_delete=django.db.models.deletion.SET_NULL, to='authen.scmbaseauth'),
        ),
        migrations.AddField(
            model_name='checktool',
            name='task_processes',
            field=models.ManyToManyField(help_text='任务子进程', through='scan_conf.ToolProcessRelation',
                                         to='scan_conf.Process'),
        ),
        migrations.AddField(
            model_name='checktool',
            name='users',
            field=models.ManyToManyField(help_text='可使用者', related_name='usable_checktools',
                                         to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            # scan_conf_checkruledesc
            name='CheckRuleDesc',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('desc_type', models.IntegerField(choices=[(0, '无格式'), (1, 'markdown')], help_text='规则描述类型')),
                ('desc', models.TextField(blank=True, help_text='规则详细描述', null=True)),
                ('checkrule', models.OneToOneField(help_text='规则', on_delete=django.db.models.deletion.CASCADE,
                                                   to='scan_conf.checkrule')),
            ],
        ),
        migrations.AddField(
            model_name='checkrule',
            name='checktool',
            field=models.ForeignKey(blank=True, help_text='分析工具', null=True,
                                    on_delete=django.db.models.deletion.CASCADE, to='scan_conf.checktool'),
        ),
        migrations.AddField(
            model_name='checkrule',
            name='creator',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                    related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='创建人'),
        ),
        migrations.AddField(
            model_name='checkrule',
            name='deleter',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                    related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='删除人'),
        ),
        migrations.AddField(
            model_name='checkrule',
            name='labels',
            field=models.ManyToManyField(help_text='标签', to='scan_conf.Label'),
        ),
        migrations.AddField(
            model_name='checkrule',
            name='languages',
            field=models.ManyToManyField(help_text='适用语言', to='scan_conf.Language'),
        ),
        migrations.AddField(
            model_name='checkrule',
            name='modifier',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                    related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='最近修改人'),
        ),
        migrations.CreateModel(
            # scan_conf_checkprofile
            name='CheckProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='创建时间')),
                ('modified_time',
                 models.DateTimeField(db_index=True, default=apps.base.basemodel.utcnow, verbose_name='最近修改时间')),
                ('deleted_time', models.DateTimeField(blank=True, db_index=True, null=True, verbose_name='删除时间')),
                ('name', models.CharField(help_text='规则集名称', max_length=64, unique=True)),
                ('checkpackages', models.ManyToManyField(help_text='规则包', related_name='used_checkprofiles',
                                                         to='scan_conf.CheckPackage')),
                ('creator', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                              related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='创建人')),
                ('custom_checkpackage', models.OneToOneField(
                    blank=True, help_text='自定义规则包', null=True,
                    on_delete=django.db.models.deletion.CASCADE,
                    related_name='checkprofile', to='scan_conf.checkpackage')),
                ('deleter', models.ForeignKey(
                    blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                    related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='删除人')),
                ('modifier', models.ForeignKey(
                    blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                    related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='最近修改人')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('everything', django.db.models.manager.Manager()),
            ],
        ),
        migrations.AddField(
            model_name='checkpackage',
            name='checkrule',
            field=models.ManyToManyField(help_text='工具规则', related_name='checkpackage',
                                         through='scan_conf.PackageMap', to='scan_conf.CheckRule'),
        ),
        migrations.AddField(
            model_name='checkpackage',
            name='checktool',
            field=models.ManyToManyField(help_text='分析工具', to='scan_conf.CheckTool'),
        ),
        migrations.AddField(
            model_name='checkpackage',
            name='creator',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                    related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='创建人'),
        ),
        migrations.AddField(
            model_name='checkpackage',
            name='deleter',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                    related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='删除人'),
        ),
        migrations.AddField(
            model_name='checkpackage',
            name='labels',
            field=models.ManyToManyField(blank=True, help_text='标签', to='scan_conf.Label'),
        ),
        migrations.AddField(
            model_name='checkpackage',
            name='languages',
            field=models.ManyToManyField(blank=True, help_text='适用语言', to='scan_conf.Language'),
        ),
        migrations.AddField(
            model_name='checkpackage',
            name='modifier',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                    related_name='+', to=settings.AUTH_USER_MODEL, verbose_name='最近修改人'),
        ),
        migrations.AlterUniqueTogether(
            name='toollibmap',
            unique_together={('libscheme', 'toollib')},
        ),
        migrations.AlterUniqueTogether(
            name='checkrule',
            unique_together={('checktool', 'real_name')},
        ),
    ]
