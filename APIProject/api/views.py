from api.models import Note
from .serializers import NoteSerializer
from rest_framework import generics
from .permissions import AllowAnyPermission

class NoteList(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [AllowAnyPermission]

class NoteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [AllowAnyPermission]
