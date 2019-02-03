from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^tasks', views.tasks),
    # url(r'^tasks/(?P<taskId>\w+)', views.complete_task),
]