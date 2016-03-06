from django.conf.urls import url
from newer import views

urlpatterns = [
    url(r'^$', views.index, name='homepage'),
    url(r'signup/', views.CreatePersonView.as_view(), name='create_person_view'),
    url(r'^list/', views.PersonListView.as_view(), name='person_list_view)'),
]