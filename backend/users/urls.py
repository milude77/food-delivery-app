from django.urls import path
from .views import UserListView

urlpatterns = [
    path('', UserListView.as_view(), name='user-list'),  # 这里 '' 是相对 path
]
