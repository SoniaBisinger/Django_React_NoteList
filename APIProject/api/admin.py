from django.contrib import admin
from .models import Note

# Fast way to register models
admin.site.register(Note)

#customize model view in admin
