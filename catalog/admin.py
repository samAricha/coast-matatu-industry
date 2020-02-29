from django.contrib import admin
from .models import Room, RoomInstance, Occupant, Type

admin.site.register(Room)
admin.site.register(RoomInstance)
admin.site.register(Occupant)
admin.site.register(Type)