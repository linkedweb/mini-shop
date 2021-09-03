from django.urls import path
from .views import GenerateTokenView, ProcessPaymentView


urlpatterns = [
    path('generate-token', GenerateTokenView.as_view()),
    path('process-payment', ProcessPaymentView.as_view()),
]
