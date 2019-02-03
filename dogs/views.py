from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from tasks.models import Tasks
import json

User = get_user_model()

@api_view(['GET'])
@authentication_classes((TokenAuthentication,))
def dogs(request):
    return get_dogs(request)

@permission_classes((IsAuthenticated,))
def get_dogs(request):
    response = Response(data={'status': 'error'}, status=status.HTTP_200_OK)
    user = request.user
    task_list = user.dogs_set.all()
    task_dict = ([obj.as_dict() for obj in task_list])
    response.data = {
            'status': 'success',
            'data': task_dict
        }
    return response