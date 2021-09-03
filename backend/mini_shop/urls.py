from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('api/payment/', include('payment.urls')),
    path('admin/', admin.site.urls),
]

urlpatterns += [
    re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
]
