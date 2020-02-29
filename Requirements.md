*Models*

Rooms   -->   Name      (String)
        -->   Floor     (G, 1, 2, 3)
        -->   Capacity  (Integer)
        -->   Type      (Type[1*])
        -->   Utilities (String)
        }==>> _str_: String

Room Instance
        -->   Room      (Room[1*])
        -->   Status    (Booked, Available, Maintainance)
        -->   Due time  (Date/time Field)
        -->   Occupant  (occupant[1*])
        }==>> _str_: String

Occupant
        -->   Name      (String)
        -->   Role      (Lecturer, Student, Staff, Guest)
        -->   Room      (Room[1*])
        }==>> _str_: String

Type    -->   Type      (String)

*Admin*
Register Models

*Views*

*URLs*