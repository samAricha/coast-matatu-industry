from django.db import models
from django.urls import reverse


# ===== Room =====

class Room(models.Model):
    name = models.CharField(max_length = 50, help_text = "Enter the name of the Room (eg. Conference Hall)")
    
    FLOOR = (
        ('G', 'Ground'),
        ('1st', 'One'),
        ('2nd', 'Two'),
        ('3rd', 'Three')
    )
    floor = models.CharField(
        max_length = 1,
        choices = FLOOR,
        blank = False,
        default = 'G',
        help_text = 'Floor of the Room'
    )

    capacity = models.IntegerField(help_text = "Enter the number of maximum number of people that can be accommodated at a time", null = False)
    type = models.ForeignKey('Type', null = False, on_delete = models.PROTECT)
    utilities = models.CharField(max_length = 50, help_text = "Additional Utilities")

    def _str(self):
        return self.name
        
    def get_absolute_url(self):
        return reverse('room-detail', args=[str(self.name)])


# =====Room Instance=====

class RoomInstance(models.Model):
    room = models.ForeignKey('Room', null = False, on_delete = models.PROTECT)

    STATUS = (
        ('B', 'Booked'),
        ('A', 'Available'),
        ('M', 'Maintainance')
    )

    status = models.CharField(max_length = 50, choices = STATUS, help_text = "Status of the Room")
    due_time = models.DateTimeField(null = True, blank = True)
    occupant = models.ForeignKey('Occupant', null = True, on_delete = models.SET_NULL)

    def _str_(self):
        return f'{self.room} ({status})'


# =====Occupant=====

class Occupant(models.Model):
    name = models.CharField(max_length = 50, help_text = "Individual occupying room")

    roles = (
        ('ADM', 'Administrator'),
        ('LEC', 'Lecturer'),
        ('STD', 'Student'),
        ('STF', 'Staff')
    )
    role = models.CharField(max_length = 50, choices = roles, help_text = "Position of occupant")
    room = models.ForeignKey('Room', null = False, on_delete = models.PROTECT)

    def _str(self):
        return f'{self.name}, {self.role}'


# =====Type=====

class Type(models.Model):
    name = models.CharField(max_length = 50, help_text = "Type of Room")

    def _str(self):
        return self.name