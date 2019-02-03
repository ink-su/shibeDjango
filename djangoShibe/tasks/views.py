from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from django.db.models import Q
from tasks.models import Tasks
from dogs.models import Dogs
import json
import random

User = get_user_model()

@api_view(['GET', 'POST', 'DELETE'])
@authentication_classes((TokenAuthentication,))
def tasks(request):
    if request.method == 'POST':
        return create_task(request)
    elif request.method == 'DELETE':
        return complete_task(request)
    else:
        return get_task(request)



"""
Request load: { title: '', description: ''}
"""
@permission_classes((IsAuthenticated,))
def create_task(request):
    user = request.user
    response = Response(data={'status': 'error'}, status=status.HTTP_200_OK)
    request_data = json.loads(request.body)
    if request_data.get('title') and request_data.get('description'): 
        task = Tasks(title=request_data.get('title'), description=request_data.get('description'), owner=user)
        task.save()
        response.data = {
            'status': 'success'
        }
    return response

@permission_classes((IsAuthenticated,))
def get_task(request):
    response = Response(data={'status': 'error'}, status=status.HTTP_200_OK)
    user = request.user
    task_list = user.tasks_set.all()
    task_dict = ([obj.as_dict() for obj in task_list])
    response.data = {
            'status': 'success',
            'data': task_dict
        }
    return response


def randomDogId():
    return random.randint(0, 9)

@permission_classes((IsAuthenticated,))
def complete_task(request):
    response = Response(data={'status': 'error'}, status=status.HTTP_200_OK)
    user = request.user
    request_data = json.loads(request.body)
    if request_data.get('taskCode'): #Add a course
        task = Tasks.objects.get(uid=request_data.get('taskCode'))
        if (task.owner == user):
            # assign a dog
            dog_id = randomDogId()
            Dogs(dog_id=dog_id, owner=user).save()
            # delete a dog
            task.delete()
            response.data = {
                'status': 'success',
            }
    return response
    