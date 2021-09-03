from django.contrib import admin
from .models import Customer, Address, PaymentMethod, Order

admin.site.register(Customer)
admin.site.register(Address)
admin.site.register(PaymentMethod)
admin.site.register(Order)
