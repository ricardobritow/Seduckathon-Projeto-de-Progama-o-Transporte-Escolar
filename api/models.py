from tortoise.models import Model
from tortoise import fields
from tortoise.contrib.pydantic import pydantic_model_creator

class Gpsdata(Model):
    latitude=fields.FloatField()
    longitude=fields.FloatField()
    speed=fields.FloatField()
    heading=fields.FloatField()

class User(Model):
    username=fields.TextField()
    userid=fields.IntField(pk=True)
    password=fields.TextField()
    
class BusDetailsEve(Model):
    bus=fields.IntField(pk=True)
    school_pt=fields.JSONField()
    end_pt=fields.JSONField()
    stops=fields.JSONField()
    


Gpsdata_pydantic=pydantic_model_creator(Gpsdata,name="Gpsdata")
Gpsdata_pydanticIn=pydantic_model_creator(Gpsdata,name="Gpsdata",exclude_readonly=True)
user_model=pydantic_model_creator(User,name="UserLogin")
user_modelIn=pydantic_model_creator(User,name="UserLoginIn",exclude_readonly=True)
bus_model=pydantic_model_creator(BusDetailsEve,name='BusDetailsEve')
bus_modelIn=pydantic_model_creator(BusDetailsEve,name='BusDetailsEve',exclude_readonly=True)
