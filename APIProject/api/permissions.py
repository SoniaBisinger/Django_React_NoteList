from rest_framework import permissions

class AllowAnyPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        # Allow any request, including unauthenticated ones
        return True
