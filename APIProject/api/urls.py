from django.urls import path
from .views import NoteList, NoteDetail

urlpatterns = [
    path('notes/', NoteList.as_view(), name="notes"),
    path('notes/new/', NoteList.as_view(), name="create-note"),
    path('notes/<int:pk>/', NoteDetail.as_view(), name='note-detail'),
]
